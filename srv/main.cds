using {sales} from '../db/schema';
service Mainservice {
entity SalesOrderHeaders as projection on sales.SalesOrderHeaders;
}