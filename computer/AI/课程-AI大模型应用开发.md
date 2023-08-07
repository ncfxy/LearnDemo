# AI大模型应用开发

- 应用层: ChatGPT、 NewBing、Github Copilot、NotionAI、Midjourney
- 中间件层: LangChain
- 基础模型层: GPT4、Bert

## 01-大模型基础：理论与技术的演进(2023.07.12 )
- AI发展的四个阶段：Artificial Intelligence -> Machine Learning -> Deep Learning -> Large Language Model
- 注意力机制(Attention Mechanism)
  - 高频 ！= 重点
  - Encoder-decoder Architecture with Attention Model
- 变革里程碑：(Transformer架构) 论文（Attention is all you need）
- GPT、BERT属于两个不同的方向
- 论文
  - Seq2Seq模型
    - sequence to sequence learning with neural networks：最基本的 Seq2Seq 模型，encoder-decoder 架构
    - Learnin g Phrase Representations using RNN Encoder–Decoder for Statistical Machine Translation
  - 注意力机制:
    - Neural Machine Translation by Jointly Learning to Align and Translate (2014) - Bahdanau等首次提出注意力机制- Effective Approaches to Attention-based Neural Machine Translation (2015) - Luong等提出全局注意力和局部注意力
  - Transformer:
    - Attention Is All You Need (2017) - Vaswani等人提出仅基于注意力机制的Transformer
  - GPT系列:
    - Improving Language Understanding by Generative Pre-Training (2018) - Radford等提出GPT语言模型  
    - Language Models are Unsupervised Multitask Learners (2019) - Radford等提出GPT-2
    - Devlin等提出BERT- Language Models are Few-Shot Learners (2020) - Brown等提出GPT-3
  - BERT系列:
    - BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding (2018) 
    
## 02-大模型基础：理论与技术的演进(2023.07.16)
- GPT 模型家族:从始至今
  - 从GPT-1到GPT-3.5:一路的风云变幻
  - ChatGPT:赢在哪里
  - GPT-4:一个新的开始
- 提示学习(Prompt Learning)
  - 思维链(Chain-of-Thought, CoT):开山之作 
  - 自洽性(Self-Consistency):多路径推理
  - 思维树(Tree-of-Thoughts, ToT):续写佳话

## 03 大模型开发基础:OpenAI Embedding
- 通用人工智能的前夜
  - 计算机的数据表示
  - 表示学习(Representation Learning)和嵌入(Embedding)
  - 表示学习：让计算机更好地理解世界
  - 嵌入(Embedding)：降维、捕捉语义信息、适应性、泛化能力、可解释性

