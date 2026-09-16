import { CoreObjectNameSingular, FeatureFlagKey } from 'twenty-shared/types';

import { objectMetadataItemsSelector } from '@/object-metadata/states/objectMetadataItemsSelector';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useIsFeatureEnabled } from '@/workspace/hooks/useIsFeatureEnabled';

export const useNavigationObjectMetadataItems = () => {
  const objectMetadataItems = useAtomStateValue(objectMetadataItemsSelector);
  const isWorkflowCoreIndexPageEnabled = useIsFeatureEnabled(
    FeatureFlagKey.IS_WORKFLOW_CORE_INDEX_PAGE_ENABLED,
  );

  return objectMetadataItems.filter((objectMetadataItem) => {
    if (objectMetadataItem.nameSingular === CoreObjectNameSingular.Task) {
      return false;
    }

    if (!isWorkflowCoreIndexPageEnabled) {
      return true;
    }

    return (
      objectMetadataItem.nameSingular !==
      CoreObjectNameSingular.WorkflowVersion
    );
  });
};
