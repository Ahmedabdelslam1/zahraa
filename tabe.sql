CREATE TABLE companies (
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE branches (
    id INTEGER PRIMARY KEY,
    name TEXT,
    company_id INTEGER
);


CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT,
    role TEXT,
    branch_id INTEGER
);

CREATE TABLE patients (
    id INTEGER PRIMARY KEY,
    name TEXT,
    phone TEXT,
    branch_id INTEGER
);
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price REAL,
    stock INTEGER,
    branch_id INTEGER
);

