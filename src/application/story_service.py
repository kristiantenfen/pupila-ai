from typing import List
from ..domain.entities import Question, UserResponse, Story
from ..infrastructure.claude_client import ClaudeClient

class StoryService:
    def __init__(self, claude_client: ClaudeClient):
        self.claude_client = claude_client
        self.questions = [
            Question("Qual é o seu nome?"),
            Question("Qual é o seu maior sonho?"),
            Question("Qual é o seu lugar favorito no mundo?"),
            Question("Se você pudesse ter um superpoder, qual seria?"),
            Question("Qual é a sua maior conquista até hoje?")
        ]

    def get_questions(self) -> List[Question]:
        return self.questions

    def generate_story(self, responses: List[UserResponse]) -> Story:
        # Extraindo apenas as respostas para enviar ao Claude
        answers = [response.answer for response in responses]
        return self.claude_client.generate_story(answers) 