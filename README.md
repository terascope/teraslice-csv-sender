TODO: this module needs an update to latest Teraslice APIs

# Description

Simple sender to output data to a CSV file. Each worker will append to the same file so 

# Expected Inputs

An array of JSON format records

# Output

Status code from save operation.

# Parameters

| Name | Description | Default | Required |
| ---- | ----------- | ------- | -------- |
| filename | Path to the file where the data will be saved. All intermediate directories must pre-exist.' | | Y |
| fields | List of fields to extract from the incoming records and save to the file. |  | Y |

# Job configuration example


```
        {
          "_op": "teraslice_csv_sender",
          "fields": ["value", "date"],
          "filename": "/tmp/exported"
        }
```

# Notes

If you run this in a cluster you either need a shared filesystem or will have files stored on each node that has workers for the job. Multiple workers on the same node will all write to the same path.
