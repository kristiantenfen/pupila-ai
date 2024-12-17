from dataclasses import dataclass
from typing import List

@dataclass
class Question:
    text: str

@dataclass
class UserResponse:
    question: Question
    answer: str

@dataclass
class Story:
    content: str 