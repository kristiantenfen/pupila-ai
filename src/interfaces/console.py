from typing import List
from ..domain.entities import UserResponse, Question
from ..application.story_service import StoryService

class ConsoleInterface:
    def __init__(self, story_service: StoryService):
        self.story_service = story_service

    def run(self):
        print("Bem-vindo ao Gerador de Histórias!\n")
        
        responses = []
        questions = self.story_service.get_questions()
        
        # Coletando respostas
        for question in questions:
            answer = input(f"{question.text} ")
            responses.append(UserResponse(question, answer))

        print("\nGerando sua história personalizada...\n")
        
        try:
            story = self.story_service.generate_story(responses)
            print("=== Sua História ===")
            print(story.content)
            print("==================")
        except Exception as e:
            print(f"Ocorreu um erro: {str(e)}") 