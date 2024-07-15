# dishes/consumers.py

import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync

class DishConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        async_to_sync(self.channel_layer.group_add)(
            'dishes',
            self.channel_name
        )

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            'dishes',
            self.channel_name
        )

    def receive(self, text_data):
        data = json.loads(text_data)
        self.send(text_data=json.dumps(data))

    def dish_update(self, event):
        self.send(text_data=json.dumps(event['data']))
