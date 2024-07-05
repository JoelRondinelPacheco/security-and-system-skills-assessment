import { invalidFieldException } from "@/lib/common/domain/exception";
import { describe } from "node:test";

describe('invalidFieldException', () => {
    it('should reutnr an Error object', () => {
        const res = invalidFieldException('Error message');
        expect(res).toBeInstanceOf(Error);
    });

    it('should set the message correctly', () => {
        const message = 'Error message';
        const res = invalidFieldException(message);
        expect(res.message).toBe(message);
    })
})