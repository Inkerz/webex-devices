import xapi from "xapi"
import * as JIBB from "./jibb_WebexXapi"

let MeetingAPI = JIBB.Meeting
let Auth = JIBB.Auth
let EventBus = new JIBB.EventBus()

const SurfaceType = {
	PAPER: "PAPER",
	WHITEBOARD: "WHITEBOARD",
}

function Config(apiKey) {
	this.apiKey = apiKey
	this.webURL = "https://app.jibb.ai"
	xapi.Command.WebEngine.MediaAccess.add({ Hostname: "app.jibb.ai", Device: "Camera" })
	xapi.Command.WebEngine.MediaAccess.add({ Hostname: "app.jibb.ai", Device: "Microphone" })
	JIBB.Auth.setApiKey(this.apiKey)
}

async function generateMeetingLink() {
	console.log("generating meeting link ...")

	var title = String(await xapi.Config.SystemUnit.CustomDeviceId.get())
	if (String(title) == "") {
		title = "webex"
	}
	let userToken = await Auth.getUserToken()
	meetingId = await MeetingAPI.createMeeting({ title: title, isTemporary: true })

	let url = `${config.webURL}/workspace/${meetingId}?user_token=${userToken}`
	return url
}

async function autoStartMeeting() {
	console.log("autoStartMeeting ...")

	let url = await generateMeetingLink()
	await xapi.Command.UserInterface.WebView.Display({ Title: "jibb", Url: url })
	await sleep(10000)

	let statusList = await EventBus.getClientStatusList()

	let clinetID = statusList[0].id

	let cameraList = await EventBus.getCameraList(clinetID)

	let meetingToken = await MeetingAPI.getMeetingToken(meetingId, "write")
	let surfaceType = SurfaceType.WHITEBOARD
	let cameraId = cameraList[0].id

	let req = {
		meetingId: meetingId,
		meetingToken: meetingToken,
		surfaceType: surfaceType,
		cameraId: cameraId,
		clientId: clinetID,
	}

	if (cameraList.length) await EventBus.startStream(req)
	else return Promise.reject("No Camera Access")
}

async function stopMeeting() {
	console.log("stopMeeting ...")

	xapi.Command.UserInterface.WebView.Clear({ Target: "PersistentWebApp" })

	xapi.Command.Video.Selfview.Set({
		FullscreenMode: "Off",
		Mode: "Off",
		PIPPosition: "LowerRight",
	})
	xapi.Command.UserInterface.Extensions.Panel.Close()
}

async function zoomIn() {
	let value = await xapi.Status.Cameras.Camera[1].Position.Zoom.get()
	value = parseInt(value) - 100
	xapi.Command.Camera.PositionSet({ CameraId: "1", Zoom: value })
}

async function zoomOut() {
	let value = await xapi.Status.Cameras.Camera[1].Position.Zoom.get()
	value = parseInt(value) + 100
	xapi.Command.Camera.PositionSet({ CameraId: "1", Zoom: value })
}

async function moveUp() {
	let value = await xapi.Status.Cameras.Camera[1].Position.Tilt.get()
	value = parseInt(value) + 100
	xapi.Command.Camera.PositionSet({ CameraId: "1", Tilt: value })
}

async function moveDown() {
	let value = await xapi.Status.Cameras.Camera[1].Position.Tilt.get()
	value = parseInt(value) - 100
	xapi.Command.Camera.PositionSet({ CameraId: "1", Tilt: value })
}

async function moveRigt() {
	let value = await xapi.Status.Cameras.Camera[1].Position.Pan.get()
	value = parseInt(value) - 100
	xapi.Command.Camera.PositionSet({ CameraId: "1", Pan: value })
}

async function moveLeft() {
	let value = await xapi.Status.Cameras.Camera[1].Position.Pan.get()
	value = parseInt(value) + 100
	xapi.Command.Camera.PositionSet({ CameraId: "1", Pan: value })
}

async function resetCamera() {
	xapi.Command.Camera.PositionReset({ Axis: "all", CameraId: 1 })
}

async function saveCameraPosition() {
	let Tilt = await xapi.Status.Cameras.Camera[1].Position.Tilt.get()
	let Pan = await xapi.Status.Cameras.Camera[1].Position.Pan.get()
	let Zoom = await xapi.Status.Cameras.Camera[1].Position.Zoom.get()
	let object = { Tilt: Tilt, Pan: Pan, Zoom: Zoom }
	memoryWrite(object)
}

async function setSavedPostion() {
	let postion = await memoryRead()

	if (postion["Pan"] != undefined || postion["Zoom"] != undefined || postion["Tilt"] != undefined) {
		xapi.Command.Camera.PositionSet({
			CameraId: "1",
			Pan: postion["Pan"],
			Tilt: postion["Tilt"],
			Zoom: postion["Zoom"],
		})
	} else {
		xapi.Command.UserInterface.Message.Alert.Display({
			Duration: 30,
			Text: "Please save a camera postion first",
			Title: "No Value Found",
		})
		console.log("no postion saved ")
	}
}

// Add the management panel to UI
async function addPanel() {
	console.info("Adding  panel")

	const xml = uiExtension

	await xapi.Command.UserInterface.Extensions.Panel.Save(
		{
			PanelId: "jibb_panel",
		},
		xml
	)

	// Update manager on layout change
	xapi.Event.UserInterface.Extensions.Widget.LayoutUpdated.once(addPanel)
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

// Startup!
async function main() {
	addPanel()
	memoryInit()

	xapi.Event.UserInterface.Extensions.Panel.Clicked.on((value) => {
		if (value.PanelId == "jibb_panel") {
			xapi.Command.Video.Selfview.Set({ FullscreenMode: "Off", Mode: "On", PIPPosition: "LowerRight" })
		}
	})

	xapi.Event.UserInterface.Extensions.Widget.Action.on((event) => {
		if (event.Type == "released") {
			switch (event.WidgetId) {
				case `jibb_start`:
					autoStartMeeting()
					break
				case `jibb_stop`:
					stopMeeting()
					break

				case `jibb_zoom_in`:
					zoomIn()
					break
				case `jibb_zoom_out`:
					zoomOut()
					break

				case `jibb_save_postion`:
					saveCameraPosition()
					break
				case `jibb_set_saved_postion`:
					setSavedPostion()
					break

				case `jibb_camera_control`:
					switch (event.Value) {
						case `up`:
							moveUp()
							break
						case `down`:
							moveDown()
							break
						case `right`:
							moveRigt()
							break
						case `left`:
							moveLeft()
							break

						case `center`:
							resetCamera()
							break
						default:
							console.log("default")
							break
					}

					break

				default:
					break
			}
		}
	})
}

let config = new Config("yourApiKey")

var meetingId = ""

// memory functionalty is a inspired from https://github.com/Bobby-McGonigle/Cisco-RoomDevice-Macro-Projects-Examples/tree/master/Macro%20Memory%20Storage
async function memoryInit() {
	try {
		let event = await xapi.Command.Macros.Macro.Get({ Content: "True", Name: "jibb_Storage" })
		console.log(event)
	} catch (e) {
		console.log(e)
		console.warn("Uh-Oh, no storage found, building jibb_Storage")
		xapi.Command.Macros.Macro.Save(
			{
				Name: "jibb_Storage",
			},
			`//This is the file responsible for saving camera postion please don't delete \n`
		)
	}
}

async function memoryWrite(object) {
	try {
		let newStore = JSON.stringify(object, null, 4)
		await xapi.Command.Macros.Macro.Save(
			{
				Name: "jibb_Storage",
			},
			`var memory = ${newStore}`
		)
	} catch (e) {
		console.log(e)
	}
}

async function memoryRead() {
	try {
		let event = await xapi.Command.Macros.Macro.Get({ Content: "True", Name: "jibb_Storage" })
		let raw = event.Macro[0].Content.replace(/var.*memory.*=\s*{/g, "{")
		let store = JSON.parse(raw)
		return store
	} catch (e) {
		xapi.Command.UserInterface.Message.Alert.Display({
			Duration: 30,
			Text: "please save a camera postion first",
			Title: "no value found",
		})
		console.log(e)
	}
}

const uiExtension = `<Extensions>
<Version>1.9</Version>
<Panel>
  <Order>2</Order>
  <PanelId>jibb_panel</PanelId>
  <Origin>local</Origin>
  <Location>HomeScreenAndCallControls</Location>
  <Icon>Custom</Icon>
  <Color>#875AE0</Color>
  <Name>jibb</Name>
  <ActivityType>Custom</ActivityType>
  <CustomIcon>
	<Content>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</Content>
	<Id>d5c72d04a0311f930447729e1331908693ed5d5494d6e1003149ddb0a4a5ed95</Id>
  </CustomIcon>
  <Page>
	<Name>JIBB</Name>
	<Row>
	  <Name>Row</Name>
	</Row>
	<Row>
	  <Name>Row</Name>
	  <Widget>
		<WidgetId>jibb_start</WidgetId>
		<Name>Start</Name>
		<Type>Button</Type>
		<Options>size=2</Options>
	  </Widget>
	</Row>
	<Row>
	  <Name/>
	  <Widget>
		<WidgetId>jibb_set_saved_postion</WidgetId>
		<Name>Set Saved Camera Position</Name>
		<Type>Button</Type>
		<Options>size=4</Options>
	  </Widget>
	</Row>
	<Row>
	  <Name>Row</Name>
	  <Widget>
		<WidgetId>jibb_stop</WidgetId>
		<Name>Close</Name>
		<Type>Button</Type>
		<Options>size=2</Options>
	  </Widget>
	</Row>
	<Options>hideRowNames=1</Options>
  </Page>
  <Page>
	<Name>Camera Control</Name>
	<Row>
	  <Name>Row</Name>
	  <Widget>
		<WidgetId>jibb_camera_control</WidgetId>
		<Name>Reset</Name>
		<Type>DirectionalPad</Type>
		<Options>size=4</Options>
	  </Widget>
	</Row>
	<Row>
	  <Name>Row</Name>
	  <Widget>
		<WidgetId>jibb_zoom_out</WidgetId>
		<Type>Button</Type>
		<Options>size=1;icon=minus</Options>
	  </Widget>
	  <Widget>
		<WidgetId>jibb_zoom_in</WidgetId>
		<Type>Button</Type>
		<Options>size=1;icon=plus</Options>
	  </Widget>
	</Row>
	<Row>
	  <Name>Row</Name>
	  <Widget>
		<WidgetId>jibb_save_postion</WidgetId>
		<Name>Save Camera Position</Name>
		<Type>Button</Type>
		<Options>size=3</Options>
	  </Widget>
	</Row>
	<Options>hideRowNames=1</Options>
  </Page>
</Panel>
</Extensions>
  `

main()
