-- Create the author table --
CREATE TABLE author (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

-- Create the book table with a foreign key referencing the author table --
CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    isbn VARCHAR(13) NOT NULL,
    date_read DATE,
    author_id INTEGER REFERENCES author(id) ON DELETE CASCADE,
    is_deleted BOOLEAN DEFAULT FALSE,
    description TEXT,
    comments TEXT
);