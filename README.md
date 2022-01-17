# Listorama <img src="/listorama.png" alt="Listorama" style="height:75px; width:75px;"/>
*Listorama* is an open source project with the goal of enabling simple definition and management of reference data tables.</br>

## The Basics</br>

* **Tables**</br>
  To create a new data table, all we have to do is give it a name - for example: **cities**.</br>
  At the table level definition there are a number of optional fields that can be updated at any time, such as **Table Description**,
  and there are some informational fields that are updated automatically, such as **Table creation date**.</br>

* **Table Structure**</br>
  In order to populate a table with data (records or rows), we need to know the data structure (fields) of that table.</br>
  By default each table is created with a **key** (*id*) and **value** (*description*) field.</br>
  If you need a simple key-value reference table, you can start entering data.</br>
  If you need to add more fields, you can do so with ease from the table definition.</br>
  Each table structure will also have some informational fields that are updated automatically, such as **Record creation date**.</br>

* **Business Rules**</br>

* **Uploading/Downloading data**</br>

* **API's**</br>

* **Data Security**</br>

* **Data Audit**</br>

## The application code
Listorama has been designed as a cloud-based serverless application.</br>
The client application has been developed with Google's Angular framework, and is hosted on the Google Cloud Platform.</br>
The data tables are stored on Google's Firebase Realtime Database, a cloud-hosted database synchronized in realtime to every connected client.</br>

In the client code we refer to the components of data management as Tables/Records/Fields.</br>
This is a simplistic analogy to Tables/Rows/Columns used in SQL, or Collections/Documents/Fields in NoSQL,</br>
as well as Data Classes/Objects/Attributes in other data models.</br>

## App
You can see *Listorama* in action at https://www.listorama.me

## Authors
The project was started by Dov Keshet, Esther Kaptsan and Batel Mirel on January 1, 2022.

## License
[MIT](https://choosealicense.com/licenses/mit/)

