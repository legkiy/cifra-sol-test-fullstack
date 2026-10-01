class MemoryStorage {
  INITIAL_MIN_ID = 1;
  INITIAL_MAX_ID = 1_000_000;

  constructor(
    private customIds: Set<string>,
    private selectedIds: Set<string>,
    private selectedOrder: string[],
  ) {
    this.customIds = customIds;
    this.selectedIds = selectedIds;
    this.selectedOrder = selectedOrder;
  }

  isInitialId(id: number) {
    if (id > this.INITIAL_MIN_ID && id < this.INITIAL_MAX_ID) {
      return true;
    }
    return false;
  }
}
