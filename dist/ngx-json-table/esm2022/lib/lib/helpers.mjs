import { cloneDeep } from 'lodash';
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
// tslint:disable-next-line:only-arrow-functions
export const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val;
    let src;
    args.forEach((obj) => {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach((key) => {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = cloneDeep(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1qc29uLXRhYmxlL3NyYy9saWIvbGliL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVuQzs7Ozs7Ozs7R0FRRztBQUNILGdEQUFnRDtBQUNoRCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsVUFBVSxHQUFHLE9BQW1CO0lBQ3hELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JCO0lBRUQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVCLHVEQUF1RDtJQUN2RCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRELElBQUksR0FBRyxDQUFDO0lBQ1IsSUFBSSxHQUFHLENBQUM7SUFFUixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7UUFDeEIsK0NBQStDO1FBQy9DLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakQsT0FBTztTQUNSO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUMvQixHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZTtZQUNsQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWTtZQUU1Qix1QkFBdUI7WUFDdkIsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO2dCQUNsQixPQUFPO2dCQUVQOzs7bUJBR0c7YUFDSjtpQkFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNsQixPQUFPO2dCQUVQLHlEQUF5RDthQUMxRDtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87Z0JBRVAseURBQXlEO2FBQzFEO2lCQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLE9BQU87Z0JBRVAsMkRBQTJEO2FBQzVEO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPO2FBQ1I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcblxuLyoqXG4gKiBFeHRlbmRpbmcgb2JqZWN0IHRoYXQgZW50ZXJlZCBpbiBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBSZXR1cm5zIGV4dGVuZGVkIG9iamVjdCBvciBmYWxzZSBpZiBoYXZlIG5vIHRhcmdldCBvYmplY3Qgb3IgaW5jb3JyZWN0IHR5cGUuXG4gKlxuICogSWYgeW91IHdpc2ggdG8gY2xvbmUgc291cmNlIG9iamVjdCAod2l0aG91dCBtb2RpZnkgaXQpLCBqdXN0IHVzZSBlbXB0eSBuZXdcbiAqIG9iamVjdCBhcyBmaXJzdCBhcmd1bWVudCwgbGlrZSB0aGlzOlxuICogICBkZWVwRXh0ZW5kKHt9LCB5b3VyT2JqXzEsIFt5b3VyT2JqX05dKTtcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm9ubHktYXJyb3ctZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZGVlcEV4dGVuZCA9IGZ1bmN0aW9uICguLi5vYmplY3RzOiBBcnJheTxhbnk+KTogYW55IHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgfVxuXG4gIGNvbnN0IHRhcmdldCA9IGFyZ3VtZW50c1swXTtcblxuICAvLyBjb252ZXJ0IGFyZ3VtZW50cyB0byBhcnJheSBhbmQgY3V0IG9mZiB0YXJnZXQgb2JqZWN0XG4gIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIGxldCB2YWw7XG4gIGxldCBzcmM7XG5cbiAgYXJncy5mb3JFYWNoKChvYmo6IGFueSkgPT4ge1xuICAgIC8vIHNraXAgYXJndW1lbnQgaWYgaXQgaXMgYXJyYXkgb3IgaXNuJ3Qgb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBzcmMgPSB0YXJnZXRba2V5XTsgLy8gc291cmNlIHZhbHVlXG4gICAgICB2YWwgPSBvYmpba2V5XTsgLy8gbmV3IHZhbHVlXG5cbiAgICAgIC8vIHJlY3Vyc2lvbiBwcmV2ZW50aW9uXG4gICAgICBpZiAodmFsID09PSB0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiBuZXcgdmFsdWUgaXNuJ3Qgb2JqZWN0IHRoZW4ganVzdCBvdmVyd3JpdGUgYnkgbmV3IHZhbHVlXG4gICAgICAgICAqIGluc3RlYWQgb2YgZXh0ZW5kaW5nLlxuICAgICAgICAgKi9cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCAhPT0gJ29iamVjdCcgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8ganVzdCBjbG9uZSBhcnJheXMgKGFuZCByZWN1cnNpdmUgY2xvbmUgb2JqZWN0cyBpbnNpZGUpXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IGNsb25lRGVlcCh2YWwpO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gb3ZlcndyaXRlIGJ5IG5ldyB2YWx1ZSBpZiBzb3VyY2UgaXNuJ3Qgb2JqZWN0IG9yIGFycmF5XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzcmMgIT09ICdvYmplY3QnIHx8IHNyYyA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KHNyYykpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBkZWVwRXh0ZW5kKHt9LCB2YWwpO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gc291cmNlIHZhbHVlIGFuZCBuZXcgdmFsdWUgaXMgb2JqZWN0cyBib3RoLCBleHRlbmRpbmcuLi5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gZGVlcEV4dGVuZChzcmMsIHZhbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmV4cG9ydCB0eXBlIEpzb25UcmVlRXZlbnQgPSAnYWRkJyB8ICdlZGl0JyB8ICdkZWxldGUnIHwgJ3NvcnQnIHwgJ2NsZWFuJztcblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBKc29uUHJpbWl0aXZlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG51bGw7XG5leHBvcnQgZGVjbGFyZSB0eXBlIEpzb25WYWx1ZSA9IEpzb25QcmltaXRpdmUgfCBKc29uQXJyYXkgfCBKc29uT2JqZWN0IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgaW50ZXJmYWNlIEpzb25BcnJheSBleHRlbmRzIEFycmF5PEpzb25WYWx1ZT4ge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpzb25PYmplY3Qge1xuICBba2V5OiBzdHJpbmddOiBKc29uVmFsdWU7XG59XG4iXX0=