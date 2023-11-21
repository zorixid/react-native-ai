import express from 'express'
import { cohere } from './cohere'
import { claude } from './claude'
import { gpt } from './gpt'

// assistant API
import { createAssistant } from './createAssistant'
import { addMessageToThread } from './addMessageToThread'
import { runStatus } from './runStatus'
import { runResponse } from './runResponse'
import { getThreadMessages } from './getThreadMessages'

const router = express.Router()

router.post('/claude', claude)
router.post('/cohere', cohere)
router.post('/gpt', gpt)

// assistant
router.post('/create-assistant', createAssistant)
router.post('/add-message-to-thread', addMessageToThread)
router.post('/run-status', runStatus)
router.post('/run-response', runResponse)
router.post('/get-thread-messages', getThreadMessages)

export default router
