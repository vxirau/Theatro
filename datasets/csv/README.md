# Import our CSVs

To import the CSVs we have used on our project you can either visit [the original repository](https://github.com/bitnine-oss/import_imdb) or you can download the processed csv [here](https://mega.nz/folder/TuoUjKbT#EvNpElB4TF2UB-0-3v0XwQ)

The folder in the url is separated between clean and dirty. This is because when importing the data from imdb the database is not relational and has the csv in an incorrect format. Thanks to our script dbs_cleaner.py we cleaned each of the datasets and created the clean folder.

With the CSVs together with the dbs folder you can create the relational database and import all the data.

### Alternative

In case you want to create the CSV from 0 by yourself, you should first download the raw data from IMDB. They have it accessible on the [IMDB Dataset](https://www.imdb.com/interfaces/) webpage but you will not find everything there.

To download the entirety of the database (up to 2017) you should execute the following ftp command on your terminal:

```
wget -r -l1 -np -nd -P data ftp://ftp.fu-berlin.de/pub/misc/movies/database/frozendata/
```

To begin the import, first create a database called 'imdb':

```
>> createdb imdb
```

After the database is created, begin the import. Locate 'imdbpy2sql.py' (included in scripts/py/imdbpy2sql.py) on your system and run the following command (this will generate the dirty CSVs):

```
>> python imdbpy2sql.py -d [/dir/with/plainTextDataFiles/] -u postgresql://[postgresUser]@localhost/[databasename] -c /directory/where/to/store/CSVfiles
```

With this, all of the IMDb data should be stored in the 'imdb' database in relational tables. In case it isn't we recommend the use of pgAdmin to import the CSVs into the tables. Once that's done execute the following sql script

```
psql --echo-queries -f "imdb_load.sql"
```

With this, there should be a fully functional PostgreSQL database

