<div align="center">

# **Com Replicate**

</div>

Com Replicate makes it easy to run machine learning models in the cloud from your own code.
Run AI with an API. Run and fine-tune open-source models.  All with one line of code. With Com Replicate you can. Generate images.

# Install
## Frontend
### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/GohYiHao/replicom.git

2. set the .env file
   ```bash
   NEXT_PUBLIC_REPLICATE_API_TOKEN=<Your replicate.com api token>

3. Navigate to the cloned repository:

   ```bash
   cd frontend

4. install the node packages:
   ```bash
   npm install
5. run frontend
    ```bash
   npm run dev

6. for build
   ```bash
   npm run build


## Backend
### Installation

   ```bash
    cd backend
   ```
   ```bash
    pip install -r requirements.txt
   ```

   Set the env.file
   ```bash     
    ENGINE=<Your postgreSQL engine>
    NAME=<Your postgreSQL name>
    USER=<Your postgreSQL user>
    PASSWORD=<Your postgreSQL password>
    Authorization=<Your replicate.com api token>
   ```
    

   ```bash
    python manage.py run server
   ```

