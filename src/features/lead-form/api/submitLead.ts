import type { LeadFormData } from '../model/types';
export async function submitLead(data: LeadFormData) { await new Promise(r => setTimeout(r, 350)); return { ok: true, data }; }
