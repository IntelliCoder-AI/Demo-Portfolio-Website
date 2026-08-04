import { BlogPost } from '@/types/blog';

// This data can be replaced with API calls
export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable FastAPI Applications with AWS Lambda",
    slug: "scalable-fastapi-aws-lambda",
    excerpt: "Learn how to deploy and scale FastAPI applications using AWS Lambda and API Gateway for a truly serverless architecture.",
    content: `
      <h2>Introduction</h2>
      <p>FastAPI has taken the Python world by storm with its incredible performance and developer experience. But when it comes to deployment, traditional containerized approaches can sometimes be overkill or expensive for variable workloads. Enter AWS Lambda and serverless architecture.</p>
      
      <h2>Why Serverless FastAPI?</h2>
      <p>Deploying FastAPI on AWS Lambda using tools like Mangum provides several distinct advantages:</p>
      <ul>
        <li><strong>Zero Idle Costs:</strong> You only pay when your API is actually called.</li>
        <li><strong>Infinite Scalability:</strong> AWS handles scaling from 0 to 1000s of concurrent requests automatically.</li>
        <li><strong>Reduced Ops:</strong> No servers to patch, no containers to orchestrate.</li>
      </ul>

      <h2>Setting Up the Project</h2>
      <p>First, let's look at the basic setup for a FastAPI application that runs on Lambda.</p>
      <pre><code>from fastapi import FastAPI
from mangum import Mangum

app = FastAPI(title="Serverless API")

@app.get("/")
def read_root():
    return {"message": "Hello from AWS Lambda!"}

# This is the crucial adapter
handler = Mangum(app)</code></pre>

      <h2>Deployment Strategies</h2>
      <p>While you can use tools like Zappa or Serverless Framework, I prefer AWS CDK for its type safety and infrastructure-as-code capabilities.</p>
      <pre><code>import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class FastApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id);

    const apiLambda = new lambda.Function(this, 'ApiHandler', {
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset('api'),
      handler: 'main.handler',
    });

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: apiLambda,
    });
  }
}</code></pre>

      <h2>Handling Cold Starts</h2>
      <p>The biggest challenge with Python on Lambda is the cold start time. To mitigate this:</p>
      <ul>
        <li>Use smaller deployment packages</li>
        <li>Implement Provisioned Concurrency for critical endpoints</li>
        <li>Optimize your imports (only import what you need inside the handler if possible)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Combining FastAPI's developer ergonomics with AWS Lambda's operational simplicity creates a powerful paradigm for modern web APIs. It's my go-to architecture for new projects.</p>
    `,
    category: "tutorial",
    tags: ["FastAPI", "Python", "AWS", "Serverless", "Lambda"],
    coverImage: "/images/blog/scalable-fastapi-aws-lambda.webp",
    author: "Radhe",
    publishedAt: "2025-02-15T09:00:00Z",
    readingTime: 12,
    featured: true
  },
  {
    id: "2",
    title: "How I Built an AI-Powered Code Review Tool with LangChain",
    slug: "ai-code-review-langchain",
    excerpt: "A deep dive into building a practical, context-aware code review assistant using LLMs, LangChain, and GitHub Actions.",
    content: `
      <h2>The Problem with Traditional Code Reviews</h2>
      <p>Code reviews are essential but time-consuming. Catching stylistic issues or common anti-patterns manually is a waste of senior engineering time. I wanted to build an AI assistant that acts as a "first pass" reviewer.</p>

      <h2>Architecture Overview</h2>
      <p>The solution involves a GitHub Action that triggers on Pull Requests. It uses LangChain to coordinate the analysis, utilizing RAG (Retrieval-Augmented Generation) to understand the broader repository context.</p>

      <h2>Implementing the LangChain Agent</h2>
      <p>The core of the tool is a custom LangChain agent that analyzes the diff:</p>
      <pre><code>from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate

llm = ChatOpenAI(temperature=0.2, model="gpt-4")

review_prompt = PromptTemplate(
    input_variables=["code_diff", "file_context"],
    template="""
    You are an expert Senior Software Engineer.
    Review the following code changes:
    {code_diff}
    
    Context from the rest of the file:
    {file_context}
    
    Provide constructive feedback focusing on:
    1. Security vulnerabilities
    2. Performance bottlenecks
    3. Architecture and design patterns
    """
)</code></pre>

      <h2>Adding Repository Context</h2>
      <p>The biggest challenge with AI code review is the lack of context. A change might look fine in isolation but break a contract elsewhere. We solved this using a vector store (ChromaDB) containing the repository's AST (Abstract Syntax Tree) representations.</p>

      <h2>Results and Learnings</h2>
      <p>After deploying this internally:</p>
      <ul>
        <li>PR review time dropped by 40%</li>
        <li>The AI caught 3 subtle race conditions in the first month</li>
        <li>Developers started learning from the AI's suggestions</li>
      </ul>
      <p>The key takeaway is that AI shouldn't replace human reviewers, but it can significantly enhance their effectiveness by handling the routine checks and pointing out obscure edge cases.</p>
    `,
    category: "ai-ml",
    tags: ["AI", "LangChain", "Python", "GitHub Actions", "LLM"],
    coverImage: "/images/blog/ai-code-review-langchain.webp",
    author: "Radhe",
    publishedAt: "2024-11-02T10:30:00Z",
    readingTime: 15,
    featured: true
  },
  {
    id: "3",
    title: "From Monolith to Microservices: A Real-World Migration Story",
    slug: "monolith-to-microservices-migration",
    excerpt: "Lessons learned, mistakes made, and the architectural decisions behind splitting a 5-year-old monolithic application.",
    content: `
      <h2>The Breaking Point</h2>
      <p>Our majestic monolith had served us well, but at 500k lines of code and a team of 40 developers, it became a bottleneck. Deployments took hours, and a memory leak in the reporting module would take down the entire application.</p>

      <h2>The Strategy: Strangler Fig Pattern</h2>
      <p>We chose the Strangler Fig pattern, gradually extracting services rather than attempting a high-risk "big bang" rewrite. The API Gateway was our best friend here.</p>
      
      <h2>Step 1: The API Gateway</h2>
      <p>First, we routed all traffic through a new API Gateway (Kong). Initially, every request just proxied back to the monolith.</p>

      <h2>Step 2: Extracting the First Service</h2>
      <p>We chose the 'Notifications' module first. It was relatively isolated and had clear boundaries. We built it using Node.js and deployed it to Kubernetes.</p>
      <pre><code>// The new notification service routing
paths:
  /api/v1/notifications/*:
    service: notification-service
  /api/v1/*:
    service: legacy-monolith</code></pre>

      <h2>The Data Dilemma</h2>
      <p>The hardest part wasn't the code; it was the data. We had to break apart a massive, highly-coupled PostgreSQL database. We used logical replication and CDC (Change Data Capture) with Debezium to keep the new microservice databases in sync with the monolith during the transition.</p>

      <h2>Lessons Learned</h2>
      <ul>
        <li><strong>Don't share databases:</strong> Shared databases between microservices negate the decoupling benefits.</li>
        <li><strong>Invest in Observability early:</strong> Distributed tracing (OpenTelemetry) is not optional.</li>
        <li><strong>Organization matters:</strong> Conway's Law is real. We had to reorganize our teams to match the new architecture.</li>
      </ul>
    `,
    category: "devops",
    tags: ["Architecture", "Microservices", "DevOps", "Migration"],
    coverImage: "/images/blog/monolith-to-microservices.webp",
    author: "Radhe",
    publishedAt: "2024-08-20T14:15:00Z",
    readingTime: 10,
    featured: false
  },
  {
    id: "4",
    title: "The Art of Writing Clean Python: Patterns That Actually Matter",
    slug: "clean-python-patterns",
    excerpt: "Move beyond basic syntax and learn the design patterns and idioms that make Python code truly elegant and maintainable.",
    content: `
      <h2>Beyond PEP 8</h2>
      <p>Writing clean Python is more than just running Black or Flake8. It's about structural design, understanding the language's idioms, and writing code that is self-documenting.</p>

      <h2>1. The Power of Data Classes</h2>
      <p>Stop writing boilerplate <code>__init__</code> methods. Data classes, introduced in Python 3.7, are a game-changer for clean data structures.</p>
      <pre><code>from dataclasses import dataclass
from typing import List

@dataclass
class User:
    id: int
    username: str
    roles: List[str]
    
    def is_admin(self) -> bool:
        return "admin" in self.roles</code></pre>

      <h2>2. Context Managers for Resource Handling</h2>
      <p>If you have setup and teardown logic, use a context manager. It guarantees cleanup even if exceptions occur.</p>
      <pre><code>from contextlib import contextmanager

@contextmanager
def database_connection(db_url):
    conn = setup_connection(db_url)
    try:
        yield conn
    finally:
        conn.close()

# Usage
with database_connection("postgres://...") as db:
    db.execute("SELECT * FROM users")</code></pre>

      <h2>3. Type Hinting is Not Optional (Anymore)</h2>
      <p>In modern Python development, especially in large codebases, type hints are essential. They serve as machine-verifiable documentation.</p>
      <pre><code>from typing import Optional, Dict, Any

def process_payload(data: Dict[str, Any]) -> Optional[str]:
    if not data.get("valid"):
        return None
    return process_internal(data)</code></pre>

      <h2>Conclusion</h2>
      <p>Python's simplicity is deceptive. Writing truly maintainable Python requires discipline and a deep understanding of these patterns. Embrace type hints, leverage the standard library, and always prioritize readability.</p>
    `,
    category: "engineering",
    tags: ["Python", "Clean Code", "Best Practices", "Software Engineering"],
    coverImage: "/images/blog/clean-python-patterns.webp",
    author: "Radhe",
    publishedAt: "2024-05-10T08:45:00Z",
    readingTime: 8,
    featured: false
  }
];
