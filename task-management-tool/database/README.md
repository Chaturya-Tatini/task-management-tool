# Database Setup for Task Management Tool

This directory contains the necessary files for managing the PostgreSQL database used in the Task Management Tool project.

## Migrations

- **migrations/001_create_tasks_table.sql**: This file contains the SQL migration script to create the tasks table in the PostgreSQL database. It defines the structure of the tasks table, including fields such as `id`, `title`, `description`, `status`, and `createdAt`.

## Seeds

- **seeds/seed_tasks.sql**: This file contains the SQL script to seed initial data into the tasks table. It can be used to populate the database with sample tasks for testing and development purposes.

## Usage

To set up the database, follow these steps:

1. **Run Migrations**: Execute the migration script to create the necessary tables in your PostgreSQL database.
2. **Seed Database**: Optionally, run the seed script to populate the database with initial data.

Ensure that your PostgreSQL server is running and that you have the necessary permissions to create databases and tables.