# Use official Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose Streamlit default port
EXPOSE 8501

# Expose Gradio default port
# EXPOSE 7860

# Start supervisord
CMD ["supervisord", "-c", "supervisord.conf"]
