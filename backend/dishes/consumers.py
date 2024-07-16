import json
from channels.generic.websocket import AsyncWebsocketConsumer

class DishConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add('dishes', self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard('dishes', self.channel_name)

    async def dish_update(self, event):
        data = event['data']
        await self.send(text_data=json.dumps(data))
