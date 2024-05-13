from flask import Blueprint

defaultAPI = Blueprint('defaultAPI', __name__)
mobileAPI = Blueprint('mobileAPI', __name__)

from . import MobAPI
from . import HomeAPI