import { DEVELOPERS, ADMIN_ROLE_NAME } from '../../config/config.js';

export const REGULAR = 0;
export const ADMIN_ONLY = 1;
export const OWNER_ONLY = 2;
export const DEVELOPER_ONLY = 3;

export function hasPermission(user, permission) {
    if (permission === DEVELOPER_ONLY && DEVELOPERS.includes(user.id)) return true;
    if (permission === OWNER_ONLY && user.guild && user.guild.ownerID === user.id) return true;
    if (permission === ADMIN_ONLY && user.roles && user.roles.cache.find((role) => role.name === ADMIN_ROLE_NAME)) return true;
    if (permission === REGULAR) return true;
    return false;
}