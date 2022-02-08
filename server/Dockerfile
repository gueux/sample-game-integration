FROM python:3

WORKDIR /usr/src/app

RUN python3 -m venv venv
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV FLASK_DEBUG=1 
ENV FLASK_APP=index.py

CMD [ "flask", "run", "--host=0.0.0.0" ]