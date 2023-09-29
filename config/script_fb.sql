/* create database five_braids;
use five_braids;


create table usuario (
cod_usuario int primary key auto_increment,
email_usuario varchar(40),
tel_usuario varchar (15),
tipo_usuario varchar (10),
nome_usuario varchar (30)
);


create table pedido (
cod_pedido int primary key auto_increment,
data_pedido varchar (10),
cod_usuario int,
foreign key (cod_usuario) references usuario (cod_usuario)
);


create table produtos (
cod_produto int primary key auto_increment,
qtd_estoque varchar (20),
nome_produto varchar (30),
cod_pedido int,
cod_fornecedor int,
foreign key (cod_pedido) references pedido (cod_pedido),
foreign key (cod_fornecedor) references fornecedor (cod_fornecedor)
);


create table fornecedor (
cod_fornecedor int primary key auto_increment,
tel_fornecedor varchar (15),
nome_forncedor varchar (50),
cnpj varchar (14),
loc_fornecedor varchar (30)
);create database five_braids;
use five_braids;


create table usuario (
cod_usuario int primary key auto_increment,
email_usuario varchar (40),
tel_usuario varchar (15),
tipo_usuario varchar (10),
nome_usuario varchar (30)
);


create table pedido (
cod_pedido int primary key auto_increment,
data_pedido varchar (10),
cod_usuario int,
foreign key (cod_usuario) references usuario (cod_usuario)
);


create table produtos (
cod_produto int primary key auto_increment,
qtd_estoque varchar (20),
nome_produto varchar (30),
cod_pedido int,
cod_fornecedor int,
foreign key (cod_pedido) references pedido (cod_pedido),
foreign key (cod_fornecedor) references fornecedor (cod_fornecedor)
);


create table fornecedor (
cod_fornecedor int primary key auto_increment,
tel_fornecedor varchar (15),
nome_forncedor varchar (50),
cnpj varchar (14),
loc_fornecedor varchar (30)
); */