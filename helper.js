
const {google} = require('googleapis');
const sheets = google.sheets('v4');
const authorizeHelper = require("./index");

exports.getbreakFast =  async()  => {

    let breakfastData;
    let lunchData;

  const authClient = await authorize();
  const breakfastRequest = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: '1wuN8DRM6WJG9QDbblFnZRRRXVHO83vcgs1ANVmwbcOs',  // TODO: Update placeholder value.

    // The A1 notation of the values to retrieve.
    range: 'breakfast',  // TODO: Update placeholder value.

    majorDimension: "COLUMNS",

    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.

    // How dates, times, and durations should be represented in the output.
    // This is ignored if value_render_option is
    // FORMATTED_VALUE.
    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
    dateTimeRenderOption: 'FORMATTED_STRING',  // TODO: Update placeholder value.

    auth: authClient,
  };

  const lunchRequest = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: '1wuN8DRM6WJG9QDbblFnZRRRXVHO83vcgs1ANVmwbcOs',  // TODO: Update placeholder value.

    // The A1 notation of the values to retrieve.
    range: 'Lunch',  // TODO: Update placeholder value.

    majorDimension: "COLUMNS",

    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.

    // How dates, times, and durations should be represented in the output.
    // This is ignored if value_render_option is
    // FORMATTED_VALUE.
    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
    dateTimeRenderOption: 'FORMATTED_STRING',  // TODO: Update placeholder value.

    auth: authClient,
  }; 

  try {
    const breakfastResponse = (await sheets.spreadsheets.values.get(breakfastRequest)).data;
    // TODO: Change code below to process the `response` object:

    const lunchResponse = (await sheets.spreadsheets.values.get(lunchRequest)).data;
    // TODO: Change code below to process the `response` object:


    return  {
        breakfast:breakfastResponse.values,
        lunch: lunchResponse.values
    } 
  } catch (err) {
    console.error(err);
  }
}

async function authorize() {
  // TODO: Change placeholder below to generate authentication credentials. See
  // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
  //
  // Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/drive.readonly'
  //   'https://www.googleapis.com/auth/spreadsheets'
  //   'https://www.googleapis.com/auth/spreadsheets.readonly'

  let authClient = authorizeHelper.authorize();

  if (authClient == null) {
    throw Error('authentication failed');
  }

  return authClient;
}