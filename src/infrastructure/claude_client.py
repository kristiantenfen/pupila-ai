import anthropic
from typing import List
from ..domain.entities import Story

class ClaudeClient:
    def __init__(self, api_key: str):
        self.client = anthropic.Anthropic(api_key=api_key)

    def generate_story(self, responses: List[str]) -> Story:
        try:
            # Criando o prompt para o Claude
            prompt = (
                "Crie uma história criativa e envolvente que incorpore naturalmente "
                f"os seguintes elementos: {', '.join(responses)}. "
                "A história deve ter aproximadamente 200 palavras."
            )
            
            message = self.client.messages.create(
                model="claude-3-sonnet-20240229",
                max_tokens=1024,
                messages=[{
                    "role": "user",
                    "content": prompt
                }]
            )
            
            return Story(content=message.content[0].text)
        except Exception as e:
            raise Exception(f"Erro ao gerar história: {str(e)}") 