# Listorama <img src="/listorama.png" alt="Listorama" style="height:75px; width:75px;"/>
An open source project with the goal of enabling simple definition and management of reference data tables.</br>

## The Basics</br>

* **Tables**</br>
  The main page of *Listorama* displays a list of data tables that you can work with.</br>
  To create a new data table, click on the *New Table* button, and assign a unique name to the table. For example, **cities**.</br>
  The new table now appears in the Tables list.</br>
  Each table comes with a number of optional fields that can be updated, such as **Table Description**.</br>
  To update these fields, click on the table name. A window containing these table-level fields is displayed for editing.</br>
  There are also some informational fields displayed, such as **Table creation date**. These are updated automatically.</br>

* **Structures**</br>
  The next step is to populate the table with data records.</br>
  To do so, we need to define the format of fields, or *data structure*, of the table.</br>

  By default, each table is created with a **key** (*id*) and **value** (*description*) field.</br>
  If all we need is a simple key-value reference table, we can start populating the table with data.</br>
  To do so, click on the *Records* option in the table row.</br>

  If we need to define more fields to the table data structure, click on the *Structure* option in the table row.</br>
  Defined table fields are stored in a central data field repository, and all we need to do is search the repository,</br>
  and assign existing fields to the table.</br>

  If we need to define a new field that does not exist in the repository, click on the *New field* button.</br>
  After defining the field name and other attributes, the new field is stored in the repository, and automatically assigned to the table structure.</br>

  Fields can also be defined to the repository in a seperate process - manually, or by upload or API.</br>

* **Records**</br>
  After the table and structure is defined, we can populate the table with data records.<br>
  To do so, click on the *Records* option in the table row.<br>
  The *Records* page will display a list of the records that exist in the table.</br>
  If you click on the *Edit* option in the record row, a window containing the record field values will be displayed for editing.</br>
  You will be able to edit all the fields that were previously defined in the table data structure.</br>
  Each record will also have some informational fields that are updated automatically, such as **Record creation date**.</br>
  You can also add a new field to the repository/structure from this window as well.</br>

  You can also delete records by clicking on the *Delete* option in the record row.

* **Data Rules**</br>
  In order to ensure data integrity, data rules can be defined at both the *Table* and *Field* definitions.</br>

  * At the Table level you can define functions/services that will be invoked when a record is accessed, added, changed or deleted.</br>
    You can also define Parent-Child relationships between tables, such as the *Countries* (Parent) and *Cities* (Child).

  * Field-level data rules are defined at the field level definition and will be employed whenever the field is being populated with a value.</br>
    Should the need arise, you can override repository-level definitions of a field within a specific strucutre.</br>

    The following rules can be defined:</br>
    * Validation - define specific values that can be stored in the field using standard predicates such as EQ, NE, LIKE, IN</br>
    * Required - define if a field is mandatory
    * Parent table - define if a field's values must exist in a reference table key
    * Derivation - define how a value of a field is to be derived
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
This is a simplistic analogy to Tables/Rows/Columns used in SQL, or Collections/Documents/Fields in NoSQL.</br>

## App
You can see *Listorama* in action at https://www.listorama.me

## Authors
The project was initiated by Dov Keshet, Batel Mirel and Esther Kaptsan in January 2022.

## License
[MIT](https://choosealicense.com/licenses/mit/)

