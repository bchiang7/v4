---
order: 2
date: '2024-10-22'
title: 'Text Redactor'
github: 'https://github.com/AvaneeshKhandekar/Text-Redactor'
external: ''
ios: ''
android: ''
tech:
  - Python
  - SpaCy
  - NLP
showInProjects: true
---

This script redacts sensitive information from text documents. It uses the Spacy library with pre-trained models for NER along with Regular Expression to identify and mask sensitive data, such as names, dates, phone numbers, and addresses. Additionally, user can provide a concept to redact and the script redacts all portions of text that have anything to do with the particular concept. For redacting concepts the script uses NLTK wordnet to get synonyms and hyponyms for the given concept words and redacts sentences based on the created set.