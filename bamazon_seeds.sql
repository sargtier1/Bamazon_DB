-- database initilization
drop database if exists bamazon_db;
create database bamazon_db;

-- use this database
use bamazon_db;
-- creates table

create table product_list(
    id int not null auto_increment,
    item_name VARCHAR(25) not null,
    dept_name VARCHAR(25) not null,
    item_price int not null,
    stock int not null,
    primary key (id)
);
-- puts data in table
insert into product_list (item_name, dept_name, item_price, stock)
	values ("Headphones", "Electronics", 59.99, 50);

insert into product_list (item_name, dept_name, item_price, stock)
	values ("Apple", "Produce", 0.99, 50);

insert into product_list (item_name, dept_name, item_price, stock)
	values ("Orange", "Produce", 0.99, 50);

insert into product_list (item_name, dept_name, item_price, stock)
	values ("Lime", "Produce", 1.99, 50);

insert into product_list (item_name, dept_name, item_price, stock)
	values ("Table", "Furniture", 149.99, 50);
	
insert into product_list (item_name, dept_name, item_price, stock)
	values ("Chairs", "Furniture", 69.99, 250);

insert into product_list (item_name, dept_name, item_price, stock)
	values ("Cabinet", "Furniture", 129.99, 50);

insert into product_list (item_name, dept_name, item_price, stock)
	values ("iPhone", "Electronics", 599.99, 50);

insert into product_list (item_name, dept_name, item_price, stock)
	values ("TV", "Electronics", 749.99, 50);

insert into product_list (item_name, dept_name, item_price, stock)
	values ("Computer", "Electronics", 999.99, 50);









