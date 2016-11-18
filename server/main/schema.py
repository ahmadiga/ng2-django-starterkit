import graphene
from graphene_django import DjangoObjectType
from django.contrib.auth.models import User as ModelUser
from graphene_django.filter import DjangoFilterConnectionField


class UserNode(DjangoObjectType):
    class Meta:
        interfaces = (graphene.relay.Node,)
        model = ModelUser
        filter_fields = ['username', ]


class Query(graphene.ObjectType):
    user = graphene.relay.Node.Field(UserNode)
    users = DjangoFilterConnectionField(UserNode)


schema = graphene.Schema(query=Query)
