# Listorama <img src="/listorama.png" alt="Listorama" style="height:75px; width:75px;"/>
*Listorama* is an open source project with the goal of enabling simple definition and management of reference data tables.</br>

## The Basics</br>

* **Tables**</br>
  The main page of *Listorama* displays a list of data tables that we can work with.</br>
  To create a new data table, all we need to do is click on the *New Table* button and assign a unique name to the table, for example: **cities**.</br>
  The new table now appears in the Tables list.</br>
  Each table comes with a number of optional fields that can be updated, such as **Table Description**.</br>
  To update these fields, click on the table name - a window containing table-level fields is displayed for editing.</br>
  There are also some informational fields displayed, such as **Table creation date**. These are updated automatically.</br>

* **Structures**</br>
  Our next step is to populate our table with data (records, or rows).</br>
  To do so, we need to define the format of fields - or data structure - of the table.</br>
  By default, each table is created with a **key** (*id*) and **value** (*description*) field.</br>
  If all we need is a simple key-value reference table, we can start populating the table with data, by clicking on the *Records* option.</br>
  
  If we need to define more fields to the table data structure, we click on the *Structure* option in the table row.</br>
  Defined table fields are stored in a central data field repository.</br>
  All we need to do is search the repository and assign an existing field to the table.</br>
  If we need to define a new field, we click on the *New field* button, and define the field name and other field attributes.<br>
  The new field is then stored in the repository, and assigned to the table structure.</br>
  
  Fields can also be defined to the repository in a seperate process - either manually, or via upload or API.</br>

* **Records**</br>
  After we have defined our table and strucutre, we can populate the table with data by clicking on the *Records* option.<br>
  The next page will display all the records that have been added to the table.</br>
  When we click on the *Edit* option, a window containing the record fields is displayed for editing.</br>
  Each record will also have some informational fields that are updated automatically, such as **Record creation date**.</br>

  
* **Data Rules**</br>
  In order to ensure data integrity, data rules can be defined at both the *Table* and *Field* definitions.</br>
  
  At the Table level you can define functions/services that will be invoked when a record is accessed, added, changed or deleted.</br>
  
  Field-level data rules are defined at the field level definition and will be employed whenever the field is being populated with a value.</br>
    Should the need arise, you can override repository-level definitions of a field, within a specific strucutre.</br>

  The following rules can be defined:</br>
  * Validation - define only those specific values that can be stored in the field (using standard predicates: EQ,NE,GT,LT,GE,LE,LIKE,IN,BETWEEN)</br>
  * Required - define if a field is mandatory
  * Parent table - define if a field's values can only be values that reside in a Relationship - define if a value can field is a parent field that Parent Lookup - define a parent table
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

