import * as SelectRDX from '@radix-ui/react-select'
export const Select = () => {
  return (
    <SelectRDX.Root>
      <SelectRDX.Trigger>
        <SelectRDX.Value placeholder={'placeholder '} />
        <SelectRDX.Icon />
      </SelectRDX.Trigger>

      <SelectRDX.Portal>
        <SelectRDX.Content>
          <SelectRDX.ScrollUpButton />
          <SelectRDX.Viewport>
            <SelectRDX.Item value={'one'}>
              <SelectRDX.ItemText />
              <SelectRDX.ItemIndicator />
            </SelectRDX.Item>

            <SelectRDX.Group>
              <SelectRDX.Label />
              <SelectRDX.Item value={'two'}>
                <SelectRDX.ItemText />
                <SelectRDX.ItemIndicator />
              </SelectRDX.Item>
            </SelectRDX.Group>

            <SelectRDX.Separator />
          </SelectRDX.Viewport>
          <SelectRDX.ScrollDownButton />
          <SelectRDX.Arrow />
        </SelectRDX.Content>
      </SelectRDX.Portal>
    </SelectRDX.Root>
  )
}
