export const isRecallRecordingDoneSignal = ({
  event,
  statusCode,
}: {
  event: string;
  statusCode: string | undefined;
}): boolean => {
  // Recall announces expiry as recording.deleted; both imports settle from the stored expiry.
  return (
    event === 'recording.done' ||
    event === 'recording.failed' ||
    event === 'recording.deleted' ||
    statusCode === 'done' ||
    statusCode === 'media_expired'
  );
};
