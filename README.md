# Simple sender for Teraslice that exports to CSV files

If you run this in a cluster you either need a shared filesystem or will have files stored on each node that has workers for the job. Multiple workers on the same node will all write to the same path.

```
        {
          "_op": "teraslice_csv_sender",
          "fields": ["value", "date"],
          "filename": "/tmp/exported"
        }
```