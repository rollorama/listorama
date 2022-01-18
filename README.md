# Listorama <img src="/listorama.png" alt="Listorama" style="height:75px; width:75px;"/>
*Listorama* is an open source project with the goal of enabling simple definition and management of reference data tables.</br>

## The Basics</br>

* **Tables**</br>
  To create a new data table, all we have to do is give it a name - for example: **cities**.</br>
  At the table level definition there are a number of optional fields that can be updated, such as **Table Description**.
  There are also some informational fields that are updated automatically, such as **Table creation date**.</br>

* **Table Structure**</br>
  In order to populate a table with data (records or rows), we need to know the data structure (fields) of that table.</br>
  By default each table is created with a **key** (*id*) and **value** (*description*) field.</br>
  If you need a simple key-value reference table, you can start entering data.</br>
  If you need to add more fields, you can do so with ease from the table definition.</br>
  Table fields can be added or deleted at any time.</br>
  Each table structure will also have some informational fields that are updated automatically, such as **Record creation date**.</br>

* **Data Rules**</br>
  In order to ensure data integrity, data rules can be defined at both the Table and Field level definitions.</br>
  At the Table level you can define functions/services that will be invoke when a record is accessed, added, changed or deleted.</br>
  Field level data rules are defined at the field level and will be employed whenever the field is being populated with a value.</br>  
  * Validation - define a set of rules to ensure that only valid values can be stored in the field
  * Required - define if a field is mandatory
  * Lookup - define a parent table 
  * Derivation - define how a value of a field should be derived from other fields
  * Function - define an external function/service which can be used to validate or populate a field
  * Trigger - define an external function/service which can be triggered when a field value is changed
 
  
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

