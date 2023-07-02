// type Props<T extends FieldValues> = {
//   control: Control<T>
//   name: FieldPath<T>
// } & Omit<TextFiedProps, any>
export const ControlledTextField = 0
// = <T extends FieldValues>({
//   type,
//   control,
//   name,
//   ...rest
// }): Props<T> => {
//   const { field } = useController({
//     name,
//     control,
//     ...rest,
//   })
//
//   return <Input {...rest} {...field} type={'text'} />
// }
