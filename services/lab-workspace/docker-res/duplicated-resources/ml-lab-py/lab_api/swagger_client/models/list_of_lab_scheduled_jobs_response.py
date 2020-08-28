# coding: utf-8

"""
    ML Lab Service

    Functionality to create and manage Lab projects, services, datasets, models, and experiments.  # noqa: E501

    OpenAPI spec version: 3.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class ListOfLabScheduledJobsResponse(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'metadata': 'ValueListFormatMetadata',
        'data': 'list[LabScheduledJob]',
        'errors': 'UnifiedErrorMessage'
    }

    attribute_map = {
        'metadata': 'metadata',
        'data': 'data',
        'errors': 'errors'
    }

    def __init__(self, metadata=None, data=None, errors=None):  # noqa: E501
        """ListOfLabScheduledJobsResponse - a model defined in Swagger"""  # noqa: E501

        self._metadata = None
        self._data = None
        self._errors = None
        self.discriminator = None

        if metadata is not None:
            self.metadata = metadata
        if data is not None:
            self.data = data
        if errors is not None:
            self.errors = errors

    @property
    def metadata(self):
        """Gets the metadata of this ListOfLabScheduledJobsResponse.  # noqa: E501


        :return: The metadata of this ListOfLabScheduledJobsResponse.  # noqa: E501
        :rtype: ValueListFormatMetadata
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this ListOfLabScheduledJobsResponse.


        :param metadata: The metadata of this ListOfLabScheduledJobsResponse.  # noqa: E501
        :type: ValueListFormatMetadata
        """

        self._metadata = metadata

    @property
    def data(self):
        """Gets the data of this ListOfLabScheduledJobsResponse.  # noqa: E501


        :return: The data of this ListOfLabScheduledJobsResponse.  # noqa: E501
        :rtype: list[LabScheduledJob]
        """
        return self._data

    @data.setter
    def data(self, data):
        """Sets the data of this ListOfLabScheduledJobsResponse.


        :param data: The data of this ListOfLabScheduledJobsResponse.  # noqa: E501
        :type: list[LabScheduledJob]
        """

        self._data = data

    @property
    def errors(self):
        """Gets the errors of this ListOfLabScheduledJobsResponse.  # noqa: E501


        :return: The errors of this ListOfLabScheduledJobsResponse.  # noqa: E501
        :rtype: UnifiedErrorMessage
        """
        return self._errors

    @errors.setter
    def errors(self, errors):
        """Sets the errors of this ListOfLabScheduledJobsResponse.


        :param errors: The errors of this ListOfLabScheduledJobsResponse.  # noqa: E501
        :type: UnifiedErrorMessage
        """

        self._errors = errors

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(ListOfLabScheduledJobsResponse, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ListOfLabScheduledJobsResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
