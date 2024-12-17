from src.infrastructure.claude_client import ClaudeClient
from src.application.story_service import StoryService
from src.interfaces.console import ConsoleInterface
from config import CLAUDE_API_KEY

def main():
    try:
        # Inicializando as dependências
        claude_client = ClaudeClient(CLAUDE_API_KEY)
        story_service = StoryService(claude_client)
        console = ConsoleInterface(story_service)
        
        # Executando a aplicação
        console.run()
    except Exception as e:
        print(f"Erro fatal: {str(e)}")

if __name__ == "__main__":
    main() 