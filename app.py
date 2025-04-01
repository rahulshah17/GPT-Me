from transformers import AutoTokenizer, AutoModelForCausalLM
from peft import PeftModel
import torch
import os

# Define model and adapter paths
model_id = "meta-llama/Llama-3.2-3B-Instruct"
adapter_path = "rahulhshah/rahul-llama3-gptme-lora"

# Load Hugging Face token
HF_TOKEN = ""

# Load tokenizer with auth token for CPU
tokenizer = AutoTokenizer.from_pretrained(
    adapter_path, # Auth token to access the model
)

# Load base model with correct settings on CPU
base_model = AutoModelForCausalLM.from_pretrained(
    model_id,
    device_map="cpu",  # Run model on CPU
    torch_dtype=torch.float32,
)

# Load LoRA adapter correctly on CPU
model = PeftModel.from_pretrained(
    base_model,
    adapter_path,
).to("cpu")  # Move to CPU

print("✅ Model Loaded Successfully on CPU!")
