# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Set environment variables for PostgreSQL
ENV POSTGRES_DB=mydatabase \
    POSTGRES_USER=myuser \
    POSTGRES_PASSWORD=mypassword

# Create a directory for the PostgreSQL data and assign permissions
RUN mkdir -p /var/lib/postgresql/data
RUN chown -R postgres:postgres /var/lib/postgresql/data

# Expose the PostgreSQL port
EXPOSE 5432

# Define a volume to persist the PostgreSQL data
VOLUME ["/var/lib/postgresql/data"]

# Start PostgreSQL service when the container launches
CMD ["postgres"]


