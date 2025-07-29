import type { StateCreator } from "zustand";

export interface UserSlice {
  typoraMd: string;
  setTyporaMd: (v: string) => void;
  faceTimeImages: {
    [date: string]: string;
  };
  addFaceTimeImage: (v: string) => void;
  delFaceTimeImage: (k: string) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  typoraMd: `# AI/ML Engineering Notes

## Current Projects

### MCP Server Development
Building Model Context Protocol servers for AI tool integration:
- AWS InfraSec MCP Server - Security analysis capabilities
- Custom tools for LLM workflows
- Integration with Claude and OpenAI APIs

### Automation Pipeline Enhancement
Upgrading existing automation with AI capabilities:
- LangChain integration for intelligent decision making
- RAG pipelines for document processing
- Multi-agent systems using Microsoft AutoGen
- DSPy for optimizing language model pipelines

## Learning Goals
- [ ] Advanced prompt engineering techniques
- [ ] Vector database optimization
- [ ] Multi-modal AI applications
- [ ] Edge AI deployment strategies

## Technical Stack Evolution
**Traditional Automation** → **AI-Enhanced Automation**
- PowerShell → Python + LangChain
- Static scripts → Adaptive AI workflows
- Rule-based → Context-aware decision making

---
*This workspace is for documenting my AI/ML engineering journey and project notes.*`,
  setTyporaMd: (v) => set(() => ({ typoraMd: v })),
  faceTimeImages: {},
  addFaceTimeImage: (v) =>
    set((state) => {
      const images = state.faceTimeImages;
      images[+new Date()] = v;
      return { faceTimeImages: images };
    }),
  delFaceTimeImage: (k) =>
    set((state) => {
      const images = state.faceTimeImages;
      delete images[k];
      return { faceTimeImages: images };
    })
});
