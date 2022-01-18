# Listorama <img src="/listorama.png" alt="Listorama" style="height:75px; width:75px;"/>
*Listorama* is an open source project with the goal of enabling simple definition and management of reference data tables.</br>

## The Basics</br>

* **Tables**</br>
  To create a new data table, all we have to do is give it a name - for example: **cities**.</br>
  At the table level definition there are a number of optional fields that can be updated, such as **Table Description**.
  There are also some informational fields that are updated automatically, such as **Table creation date**.</br>

* **Structures**</br>
  In order to populate a table with data (records or rows), we need to know the data structure (fields) of that table.</br>
  By default each table is created with a **key** (*id*) and **value** (*description*) field.</br>
  If you need a simple key-value reference table, you can start entering data.</br>
  If you need to add more fields, you can do so with ease from the table definition.</br>
  Table fields can be added or deleted at any time.</br>
  Each table structure will also have some informational fields that are updated automatically, such as **Record creation date**.</br>

* **Fields**</br>
  Fields are defined and stored in a repository.</br>
  Table structures are defined by assigning fields from the repository to the table.</br>
  Using fields from a repository enhances consistency throughout your application, and encourages the re-use of field-level data rules.</br>
  Should the need arise, you can override certain repository definitions of a field in a specific strucutre.</br>
  Fields can be defined to the repository in a seperate process, either manually, or via an API or upload, and can also be</br>
  defined as part of the table structure definition process. When defining a structure, you can search the repository for the field you would like to assign,</br>
  and if it does not exist in the repository, you define it, and it is automatically added to the repository and assigned to the table structure.</br>
  
* **Data Rules**</br>
  In order to ensure data integrity, data rules can be defined at both the *Table* and *Field* definitions.</br>
  
  At the Table level you can define functions/services that will be invoked when a record is accessed, added, changed or deleted.</br>
  
  Field-level data rules are defined at the field level definition and will be employed whenever the field is being populated with a value.</br>
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

