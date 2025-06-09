var data = [
    {
        "Maximum_Date_Fail": "2024-10-31",
        "Final_Date_Event": "2024-10-31",
        "Failure_Phase": "Normalization visit",
        "$field_states": null,
        "Created_Time": "2024-11-05T03:10:27-05:00",
        "Parent_Id": {
            "name": "Test ENRG",
            "id": "5445207000067454011"
        },
        "SIC_Code": "frt 1111111",
        "Normalization_Date": "2024-10-24",
        "Failure_Type": "Communication Interface Device Fault",
        "CGM_Observations_Maintenance": null,
        "Event_Type": "Operative",
        "Equipment_Type": null,
        "Initial_Date_Event": "2024-10-30",
        "$in_merge": false,
        "id": "5445207000083658008"
    },
    {
        "Maximum_Date_Fail": "2024-11-02",
        "Final_Date_Event": "2024-11-02",
        "Failure_Phase": "Normalization visit",
        "$field_states": null,
        "Created_Time": "2024-11-05T03:10:27-05:00",
        "Parent_Id": {
            "name": "Test ENRG",
            "id": "5445207000067454011"
        },
        "SIC_Code": "frt 1111111",
        "Normalization_Date": "2024-11-03",
        "Failure_Type": "Communication Interface Device Fault",
        "CGM_Observations_Maintenance": null,
        "Event_Type": "Operative",
        "Equipment_Type": null,
        "Initial_Date_Event": "2024-11-01",
        "$in_merge": false,
        "id": "5445207000083658009"
    },
    {
        "Maximum_Date_Fail": "2024-11-01",
        "Final_Date_Event": "2024-11-01",
        "Failure_Phase": "Normalization visit",
        "$field_states": null,
        "Created_Time": "2024-11-05T03:10:27-05:00",
        "Parent_Id": {
            "name": "Test ENRG",
            "id": "5445207000067454011"
        },
        "SIC_Code": "frt 1111111",
        "Normalization_Date": "2024-11-02",
        "Failure_Type": "Communication Interface Device Fault",
        "CGM_Observations_Maintenance": null,
        "Event_Type": "Operative",
        "Equipment_Type": null,
        "Initial_Date_Event": "2024-11-01",
        "$in_merge": false,
        "id": "5445207000083658010"
    },
    {
        "Maximum_Date_Fail": "2024-11-21",
        "Final_Date_Event": "2024-11-05",
        "Failure_Phase": "Normalization visit",
        "$field_states": null,
        "Created_Time": "2024-11-05T03:10:27-05:00",
        "Parent_Id": {
            "name": "Test ENRG",
            "id": "5445207000067454011"
        },
        "SIC_Code": "frt 1111111",
        "Normalization_Date": "2024-11-06",
        "Failure_Type": "Fault Current Transformer TC",
        "CGM_Observations_Maintenance": null,
        "Event_Type": "Operative",
        "Equipment_Type": null,
        "Initial_Date_Event": "2024-11-05",
        "$in_merge": false,
        "id": "5445207000083658011"
    },
    {
        "Maximum_Date_Fail": null,
        "Final_Date_Event": "2024-11-06",
        "Failure_Phase": "Client permission request",
        "$field_states": null,
        "Created_Time": "2024-11-05T03:10:27-05:00",
        "Parent_Id": {
            "name": "Test ENRG",
            "id": "5445207000067454011"
        },
        "SIC_Code": "frt 1111111",
        "Normalization_Date": null,
        "Failure_Type": null,
        "CGM_Observations_Maintenance": null,
        "Event_Type": "Operative",
        "Equipment_Type": null,
        "Initial_Date_Event": "2024-11-05",
        "$in_merge": false,
        "id": "5445207000083658012"
    },
    {
        "Maximum_Date_Fail": "2024-11-14",
        "Final_Date_Event": "2024-11-07",
        "Failure_Phase": "OR permission request",
        "$field_states": null,
        "Created_Time": "2024-11-05T03:10:27-05:00",
        "Parent_Id": {
            "name": "Test ENRG",
            "id": "5445207000067454011"
        },
        "SIC_Code": "frt 1111111",
        "Normalization_Date": "2024-11-06",
        "Failure_Type": "Main Accountant Theft",
        "CGM_Observations_Maintenance": null,
        "Event_Type": "Operative",
        "Equipment_Type": "Others",
        "Initial_Date_Event": "2024-11-06",
        "$in_merge": false,
        "id": "5445207000083658013"
    },
    {
        "Maximum_Date_Fail": "2024-11-08",
        "Final_Date_Event": "2024-11-07",
        "Failure_Phase": "Normalization visit",
        "$field_states": null,
        "Created_Time": "2024-11-05T03:10:27-05:00",
        "Parent_Id": {
            "name": "Test ENRG",
            "id": "5445207000067454011"
        },
        "SIC_Code": "frt 1111111",
        "Normalization_Date": "2024-11-15",
        "Failure_Type": "Communication Interface Device Fault",
        "CGM_Observations_Maintenance": null,
        "Event_Type": "Operative",
        "Equipment_Type": null,
        "Initial_Date_Event": "2024-11-08",
        "$in_merge": false,
        "id": "5445207000083658014"
    },
    {
        "Maximum_Date_Fail": null,
        "Final_Date_Event": "2024-11-15",
        "Failure_Phase": "Client permission request",
        "$field_states": null,
        "Created_Time": "2024-11-05T03:10:27-05:00",
        "Parent_Id": {
            "name": "Test ENRG",
            "id": "5445207000067454011"
        },
        "SIC_Code": "frt 1111111",
        "Normalization_Date": null,
        "Failure_Type": null,
        "CGM_Observations_Maintenance": null,
        "Event_Type": "Operative",
        "Equipment_Type": null,
        "Initial_Date_Event": "2024-11-13",
        "$in_merge": false,
        "id": "5445207000083658015"
    }
]

max_element = null;

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    
    if (element['Normalization_Date']) {
        // console.log('Normalization_Date no es nulo');

        if (max_element == null || new Date(element['Normalization_Date']) > new Date(element['Normalization_Date'])) {
            max_element = element;
        }
    }
}

console.log(max_element);