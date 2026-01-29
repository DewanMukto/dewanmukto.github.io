---
layout: post
title:  "How the DISTIL model works - easy explanation!"
author: dmimukto
categories: [ ai, distil ]
published: true
---

# Understanding how DISTIL-based AI works

The DISTIL model (Dynamic Intelligent System That Intuitively Learns) is a hybrid AI framework designed to overcome the limitations of traditional "data-hungry" models like Large Language Models (LLMs). First defined formally in my thesis research paper **Dynamic Autonomous Joint Judgement and Adaptive Learning**. As of now, the cellular protoAGI version, it has 2 types of memories:
- long-term stable parametric knowledge
- short-term flexible non-parametric episodic memory

DISTIL's current version, DISTIL-0 has a 5-step pipeline.

## Step 1: Feature Extraction
Every AI needs to convert information/data into a format it understands. Before it can do the "thinking", it needs to turn the raw data (text, image, etc.) into a list of numeric values that it can understand -> This is a feature vector (z).

Math: $z = LN(\sigma(Whx + bh))$

Example: x is a raw image's pixels, which are multiplied by weights (Wh) and added with a bias (bh), which are run through a filter (sigmoid function, activation function) to get the important features (e.g. ears, tails) to identify what type of animal the image contains. LN stands for Layer Normalization which keeps the numbers from getting too high or low. Suppose z = [0.5, 0.8] stands for high-pointy ears, medium-length fur.

## Step 2: Parametric Memory
This is just like every typical "multilayer perceptron" (MLP), also known as "neural networks" (NN).

Math: $L_{nn} = Softmax(Woz + bo)$

Example: if we get a result Lnn = [0.5, 0.3, 0.2] then the AI thinks it's a 50% chance to be a cat, 30% chance to be a dog, 20%  chance to be a snake.

## Step 3: Non-parametric Memory
The AI can refer to its episodic memory (storage of specific examples it has seen recently) and use K-nearest neighbors (KNN) algorithm to find the k number of most similar pictures to the current image.

Math: $P_{mem}(y) = \frac{1}{k} \sum I(y_i = y)$

Example: The AI looks at its 5 ($k=5$) most similar memories. It finds that 4 were Cats and 1 was a Dog.$P_{mem} = [4/5, 1/5] = [0.8, 0.2]$ (80% Cat, 20% Dog)

## Step 4: Dynamic Gating
The AI asks itself "should I trust my memory (KNN) or my knowledge (MLP)?" It first finds the entropy (H), measuring its confusion.

Math: $H = -\sum P(y) \log P(y)$

Example: If the memory results are $[0.5, 0.5]$, the AI is very confused ($H$ is high).If the memory results are $[0.8, 0.2]$, the AI is fairly certain ($H$ is low).Gating Coefficient ($\alpha$): $\alpha = f(H(P_{mem}))$. If $H$ is low (memory is certain), $\alpha$ becomes a high number (like 0.9), telling the AI to trust the memory path more

## Step 5: Joint Judgement
The AI combines the results from its 2 memories into a single final score (S_DISTIL).

Math: $S_{DISTIL} = (1 - \alpha)L_{nn} + \alpha P_{mem}$

Example: Sample Calculation (Let’s say $\alpha = 0.8$): 
- $S_{Cat} = (1 - 0.8)(0.7) + (0.8)(0.8) \rightarrow (0.2)(0.7) + 0.64 = \mathbf{0.78}$
- $S_{Dog} = (1 - 0.8)(0.3) + (0.8)(0.2) \rightarrow (0.2)(0.3) + 0.16 = \mathbf{0.22}$

Math: $\hat{y} = \text{arg max}_y (S\_{DISTIL})$ 

Example:0.78 (Cat) is higher than 0.22 (Dog). The answer is Cat!

DISTIL is better than "Standard" AI/ML models because in a standard AI, if it sees a rare "Sphynx Cat" that wasn't in its original training data, the parametric memory (MLP) might fail and call it a "Rat" because it has no fur. But because DISTIL has Episodic Memory (KNN), it can store one single picture of a Sphynx Cat and "remember" it perfectly next time, even if it hasn't been "retrained".

Now that you understand the math, here is how to understand how DISTIL actually works.

# Simplified Use Case

Imagine yourself as DISTIL. You are a student who is studying for a test. And you face a question about animals. Your eyes sees an image of an animal on the question paper. Based on your knowledge (MLP, parametric), you know the basic facts that "mammals have fur, reptiles crawl on their bellies, birds have feathers" (stored as weights and parameters already in the neural network). You also "remember" seeing the most recent images of animals that are more rarer, on social media. Example: a platypus, you remember seeing on a post right before entering the exam hall, so that is your short-term memory (KNN, non-parametric).

Knowledge, things you practiced and know = MLP, parametric.
Memory, things you saw/knew recently = KNN buffer, non-parametric.

Whenever you make a mistake, like writing down "dog" in a picture of a cat, once you receive your marks after the test, you know your mistakes and quickly update your knowledge in your brain (MLP). Behind the scenes, your brain is using calculus to change parameter values to be more accurate via "gradient descent".

Now suppose you saw something new. An animal never seen before. You start sketching some rough notes in the question paper by drawing all the animals you know of, and try to relate which animal is closest match to this new one you're seeing now. Behind the scenes, your brain is plotting a graph and using "k-nearest neighbors" to find points closest to the current image/data. Suppose you see a long beak, and short fur, so you visualize it as a (9, 2) value and find closest types of animals to it.

Your brain is now thinking "Should I trust my general knowledge or my memory?" and then you think "I am 70% sure this is bird". Behind the scenes, your brain is calculating "entropy" and right now your image is saying "it could be a bird (33%), a cat (33%), or a fish (33%)". Entropy is very high right now (you are very confused) because this new image contains many features at once. Now that what you know from the general knowledge (MLP) is not helping you, you decide to remember that image of a platypus you saw recently (KNN buffer). And yes, it was an image of a platypus so now after getting the mark correct for that question, you store it in your general knowledge.

# Full-Scale Use Case
Imagine we have a DISTIL model designed to identify pets.

### The Setup:

The Neural Network has seen 1 million pictures of Golden Retrievers and Tabby Cats. It's an expert on them. The Notebook (Memory) is empty for now.

### Scenario 1:

You show it a Golden Retriever. The Neural Network says: "I know this! 99% sure it's a dog." The Gating sees the high confidence and says: "Great, use that answer."

### Scenario 2: 

You show it a "Sphynx Cat" (a cat with no hair). The Neural Network is surprised. It thinks: "Cats have fur. This has no fur. Is it... a weird dog? A lizard? I'm only 30% sure." (High Entropy/Confusion). You tell the AI: "This is a Sphynx Cat." The AI immediately writes "No-hair creature = Sphynx Cat" in its Notebook (Memory). Ten minutes later, you show it another Sphynx Cat. The Neural Network is still confused. But the Gating looks at the Notebook and sees a perfect match! The AI says: "My general knowledge is confused, but my notebook says this is a Sphynx Cat. So I'll go with that answer!"
