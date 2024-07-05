import { invalidFieldException } from "@/lib/common/domain/exception";
import { describe } from "node:test";

let message: string;

beforeAll(() => {
  message = 'Test message';
});


describe('invalidFieldException', () => {
    it('should reutnr an Error object', () => {
        const res = invalidFieldException(message);
        expect(res).toBeInstanceOf(Error);
    });

    it('should set the message correctly', () => {
        const res = invalidFieldException(message);
        expect(res.message).toBe(message);
    });
})