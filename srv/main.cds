using {sales} from '../db/schema';
service Mainservice {
entity SalesOrderHeaders as projection on sales.SalesOrderHeaders;
entity Costumers as projection on sales.Costumers;
entity Products as projection on sales.Products;
}
