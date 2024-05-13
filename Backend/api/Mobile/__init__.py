from flask import Blueprint

mobileAPI = Blueprint('mobileAPI', __name__)

from . import mobileAPI