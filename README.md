1. Add "engine" field to package.json for further deployment:
   
   **This field crashed app into Heroku service!!!**

    ```json
    "engines": {
        "node": "6.15.1"
      }
    ```

2. **MongoDB dead for us!**

    Instead, a free [RestDB.io](RestDB.io) service is used
