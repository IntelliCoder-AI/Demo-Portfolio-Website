import { BlogPost } from '@/types/blog';

// This data can be replaced with API calls
export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable FastAPI Applications with AWS Lambda",
    slug: "scalable-fastapi-aws-lambda",
    excerpt: "Learn how to deploy and scale FastAPI applications using AWS Lambda and API Gateway for a truly serverless architecture.",
    content: `
      <h2>Introduction to Serverless FastAPI</h2>
      <p>FastAPI has taken the Python world by storm with its incredible performance, automatic interactive documentation, and excellent developer experience based on standard Python type hints. However, when it comes to deployment, traditional containerized approaches using ECS or EKS can sometimes be overkill, especially for variable workloads or early-stage projects. This is where AWS Lambda and the serverless architecture pattern come in.</p>
      
      <h2>Why Go Serverless with FastAPI?</h2>
      <p>Deploying FastAPI on AWS Lambda using tools like Mangum provides several distinct advantages for modern engineering teams:</p>
      <ul>
        <li><strong>Zero Idle Costs:</strong> The serverless pricing model means you only pay when your API is actually handling requests. No more paying for idle EC2 instances during the night.</li>
        <li><strong>Infinite Scalability:</strong> AWS handles scaling from 0 to thousands of concurrent requests automatically. You don't have to worry about configuring auto-scaling groups or load balancers.</li>
        <li><strong>Reduced Operational Overhead:</strong> No servers to patch, no OS upgrades, and no containers to orchestrate. You can focus entirely on writing business logic.</li>
      </ul>

      <h2>Setting Up the Project</h2>
      <p>Let's look at the basic setup required to make a FastAPI application run perfectly on AWS Lambda. We need an adapter to translate API Gateway events into ASGI standard events that FastAPI understands. This is exactly what the <code>mangum</code> package does.</p>
      <pre><code class="language-python">from fastapi import FastAPI
from mangum import Mangum

app = FastAPI(
    title="Serverless API",
    description="A high-performance API running on AWS Lambda"
)

@app.get("/")
def read_root():
    return {"message": "Hello from Serverless AWS Lambda!"}

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id, "status": "active"}

# The Mangum adapter handles the translation between API Gateway and ASGI
handler = Mangum(app)</code></pre>

      <h2>Infrastructure as Code with AWS CDK</h2>
      <p>While you can use tools like Zappa or Serverless Framework, I highly recommend AWS CDK (Cloud Development Kit) for its type safety and infrastructure-as-code capabilities. Here is how you can define your FastAPI stack using TypeScript:</p>
      <pre><code class="language-typescript">import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class FastApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id);

    // Define the Lambda function
    const apiLambda = new lambda.Function(this, 'ApiHandler', {
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset('api'),
      handler: 'main.handler',
      memorySize: 512,
      timeout: cdk.Duration.seconds(10),
    });

    // Create the API Gateway Rest API backed by our Lambda
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: apiLambda,
      defaultCorsPreflightOptions: {
        allowOrigins: apigw.Cors.ALL_ORIGINS,
        allowMethods: apigw.Cors.ALL_METHODS,
      },
    });
  }
}</code></pre>

      <h2>Mitigating Cold Starts</h2>
      <p>The biggest challenge with Python on Lambda is the cold start time—the delay when a new container is initialized to handle a request. To mitigate this:</p>
      <ul>
        <li><strong>Use smaller deployment packages:</strong> Remove unnecessary dependencies and use tools like <code>poetry</code> to manage your environment strictly.</li>
        <li><strong>Implement Provisioned Concurrency:</strong> For critical endpoints that cannot tolerate any cold start latency, use AWS Provisioned Concurrency to keep environments warm.</li>
        <li><strong>Optimize imports:</strong> Only import what you need inside the handler if possible, and defer heavy initialization until it's absolutely necessary.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Combining FastAPI's developer ergonomics with AWS Lambda's operational simplicity creates a powerful paradigm for modern web APIs. It has become my go-to architecture for new microservices and APIs.</p>
    `,
    category: "tutorial",
    tags: ["FastAPI", "Python", "AWS", "Serverless", "Lambda"],
    coverImage: "/images/blog/scalable-fastapi-aws-lambda.jpg",
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
      <p>Code reviews are an essential part of the software development lifecycle, but they are also incredibly time-consuming. Catching stylistic issues, missing test coverage, or common anti-patterns manually is often a waste of valuable senior engineering time. I wanted to build an AI assistant that acts as a "first pass" reviewer, providing immediate feedback on pull requests before a human even looks at them.</p>

      <h2>Architecture Overview</h2>
      <p>The solution involves a GitHub Action that triggers automatically whenever a new Pull Request is opened or updated. It uses LangChain to coordinate the analysis, utilizing RAG (Retrieval-Augmented Generation) to understand the broader repository context rather than just looking at isolated diffs.</p>

      <h2>Implementing the LangChain Agent</h2>
      <p>The core of the tool is a custom LangChain agent that analyzes the code diff. Here is a simplified version of the prompt setup:</p>
      <pre><code class="language-python">from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate

# Initialize the LLM with a low temperature for analytical tasks
llm = ChatOpenAI(temperature=0.1, model="gpt-4-turbo")

review_prompt = PromptTemplate(
    input_variables=["code_diff", "file_context"],
    template="""
    You are an expert Senior Software Engineer reviewing a Pull Request.
    Please review the following code changes:
    
    {code_diff}
    
    Context from the rest of the file and repository:
    {file_context}
    
    Provide constructive, actionable feedback focusing ONLY on:
    1. Security vulnerabilities (e.g., injection flaws, insecure data handling)
    2. Performance bottlenecks (e.g., N+1 queries, inefficient loops)
    3. Architecture and design patterns (e.g., breaking SOLID principles)
    
    Do NOT comment on minor stylistic issues like formatting.
    """
)</code></pre>

      <h2>Adding Repository Context via Vector Stores</h2>
      <p>The biggest challenge with AI code review is the lack of context. A change might look perfectly fine in isolation but break a contract or interface elsewhere in the codebase. We solved this using a vector store (ChromaDB) containing the repository's AST (Abstract Syntax Tree) representations and documentation.</p>
      <p>When a PR is analyzed, the system retrieves relevant snippets from the entire repository based on semantic similarity to the changed code, feeding that context into the prompt.</p>

      <h2>Results and Learnings</h2>
      <p>After deploying this tool internally across several engineering teams, the results were highly encouraging:</p>
      <ul>
        <li><strong>Time Savings:</strong> PR review time dropped by 40% on average, as humans focused on business logic rather than syntax.</li>
        <li><strong>Quality Improvements:</strong> The AI caught 3 subtle race conditions and 2 potential SQL injections in the first month alone.</li>
        <li><strong>Knowledge Sharing:</strong> Junior developers started learning advanced concepts directly from the AI's detailed explanations in PR comments.</li>
      </ul>
      <p>The key takeaway is that AI shouldn't replace human reviewers, but it can significantly enhance their effectiveness by handling the routine checks and pointing out obscure edge cases.</p>
    `,
    category: "ai-ml",
    tags: ["AI", "LangChain", "Python", "GitHub Actions", "LLM"],
    coverImage: "/images/blog/ai-code-review-langchain.jpg",
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
      <p>Our majestic monolith had served us incredibly well for five years. But at 500k lines of code and a rapidly growing team of 40 developers, it became a massive bottleneck. CI/CD pipelines took over an hour to run, deployments were stressful, high-risk events, and a single memory leak in a minor reporting module would frequently take down the entire application.</p>

      <h2>The Strategy: Strangler Fig Pattern</h2>
      <p>Instead of attempting a high-risk "big bang" rewrite—which almost always fails—we chose the Strangler Fig pattern. This involves gradually extracting services one by one, slowly replacing the legacy system until nothing is left.</p>
      
      <h2>Step 1: Implementing the API Gateway</h2>
      <p>First, we routed all incoming traffic through a new API Gateway (we chose Kong for its performance and plugin ecosystem). Initially, every single request just proxied straight back to the monolith. This gave us a centralized point of control.</p>

      <h2>Step 2: Extracting the First Service</h2>
      <p>We deliberately chose the 'Notifications' module first. It was relatively isolated, had clear domain boundaries, and wasn't critical to the core transactional flow. We built the new service using Node.js and deployed it to a managed Kubernetes cluster.</p>
      <pre><code class="language-yaml"># Kong Ingress Configuration Example
paths:
  # New traffic goes to the microservice
  - path: /api/v1/notifications/.*
    backend:
      serviceName: notification-service
      servicePort: 80
  # Everything else falls back to the monolith
  - path: /api/v1/.*
    backend:
      serviceName: legacy-monolith
      servicePort: 8080</code></pre>

      <h2>The Data Dilemma: Splitting the Database</h2>
      <p>The hardest part of the migration wasn't the code; it was the data. We had to break apart a massive, highly-coupled PostgreSQL database where foreign keys tied everything together. We utilized logical replication and CDC (Change Data Capture) via Debezium to stream changes into Kafka, keeping the new microservice databases strictly in sync with the monolith during the transitional phase.</p>

      <h2>Critical Lessons Learned</h2>
      <ul>
        <li><strong>Don't share databases:</strong> Shared databases between microservices completely negate the decoupling benefits. Each service must own its data exclusively.</li>
        <li><strong>Invest in Observability early:</strong> Distributed tracing (using OpenTelemetry) is not optional. Without it, debugging a request that spans five services is a nightmare.</li>
        <li><strong>Conway's Law is real:</strong> We had to reorganize our engineering teams into cross-functional pods to match the new decentralized architecture.</li>
      </ul>
    `,
    category: "devops",
    tags: ["Architecture", "Microservices", "DevOps", "Migration"],
    coverImage: "/images/blog/monolith-to-microservices.jpg",
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
      <p>Writing clean Python is much more than just running Black, Flake8, or Ruff to fix line lengths and whitespace. True code cleanliness is about structural design, deeply understanding the language's specific idioms, and writing code that is self-documenting for the next developer who has to maintain it.</p>

      <h2>1. The Power of Data Classes</h2>
      <p>Stop writing boilerplate <code>__init__</code>, <code>__repr__</code>, and <code>__eq__</code> methods. Data classes, introduced in Python 3.7, are an absolute game-changer for defining clean data structures with minimal code.</p>
      <pre><code class="language-python">from dataclasses import dataclass, field
from typing import List
from datetime import datetime

@dataclass
class User:
    id: int
    username: str
    email: str
    roles: List[str] = field(default_factory=list)
    created_at: datetime = field(default_factory=datetime.utcnow)
    
    def is_admin(self) -> bool:
        return "admin" in self.roles
        
    def add_role(self, role: str) -> None:
        if role not in self.roles:
            self.roles.append(role)</code></pre>

      <h2>2. Context Managers for Robust Resource Handling</h2>
      <p>If you have setup and teardown logic, use a context manager (the <code>with</code> statement). It guarantees cleanup execution even if exceptions occur, preventing resource leaks.</p>
      <pre><code class="language-python">from contextlib import contextmanager
import logging

@contextmanager
def database_transaction(db_session):
    """Safely handle database transactions with automatic rollback."""
    try:
        yield db_session
        db_session.commit()
    except Exception as e:
        logging.error(f"Transaction failed: {e}")
        db_session.rollback()
        raise
    finally:
        db_session.close()

# Clean, safe usage:
with database_transaction(session) as db:
    db.execute("UPDATE users SET status = 'active' WHERE id = 123")
    # If an exception happens here, it safely rolls back!</code></pre>

      <h2>3. Type Hinting is Not Optional (Anymore)</h2>
      <p>In modern Python development, especially in large codebases, type hints are essential. They serve as machine-verifiable documentation and allow IDEs and tools like Mypy to catch entire classes of bugs before they ever reach production.</p>
      <pre><code class="language-python">from typing import Optional, Dict, Any, List

def process_payload(data: Dict[str, Any]) -> Optional[str]:
    """
    Processes incoming webhook payload and extracts the session ID.
    Returns None if the payload is invalid.
    """
    if not data.get("is_valid", False):
        return None
        
    session_id: str = data.get("session_data", {}).get("id", "")
    return session_id if session_id else None</code></pre>

      <h2>Conclusion</h2>
      <p>Python's simplicity is beautiful but deceptive. Writing truly maintainable, enterprise-grade Python requires discipline and a deep understanding of these advanced patterns. Embrace type hints, leverage the standard library effectively, and always prioritize readability over cleverness.</p>
    `,
    category: "engineering",
    tags: ["Python", "Clean Code", "Best Practices", "Software Engineering"],
    coverImage: "/images/blog/clean-python-patterns.jpg",
    author: "Radhe",
    publishedAt: "2024-05-10T08:45:00Z",
    readingTime: 8,
    featured: false
  }
];
